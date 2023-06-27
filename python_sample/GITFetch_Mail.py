import requests
import datetime
import smtplib
from email.mime.text import MIMEText

def get_pull_requests(repo_owner, repo_name, token):
    headers = {
        'Authorization': f'Token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    today = datetime.date.today()
    last_week = today - datetime.timedelta(days=7)
    
    params = {
        'state': 'all',
        'sort': 'created',
        'direction': 'desc',
        'since': last_week.isoformat()
    }
    
    url = f'https://api.github.com/repos/{repo_owner}/{repo_name}/pulls'
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f'Error retrieving pull requests: {response.status_code}')


def get_pull_request_details(pull_request, token):
    headers = {
        'Authorization': f'Token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }

    url = pull_request['url']
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f'Error retrieving pull request details: {response.status_code}')


def format_pr_details(pr, token):
    pr_details = get_pull_request_details(pr, token)
    pr_number = pr_details['number']
    pr_title = pr_details['title']
    pr_status = pr_details['state']
    pr_owner = pr_details['user']['login']
    pr_from_branch = pr_details['head']['ref']
    pr_to_branch = pr_details['base']['ref']

    commits_url = pr_details['commits_url'].replace('{/sha}', '')
    commits_response = requests.get(commits_url, headers={'Authorization': f'Token {token}'})
    commits = commits_response.json()
    commit_messages = [commit['commit']['message'] for commit in commits]

    pr_link = pr_details['html_url']
    backslash_char = "\\"

    return f'''
        PR #{pr_number}
        Title: {pr_title}
        Status: {pr_status}
        Owner: {pr_owner}
        From Branch: {pr_from_branch}
        To Branch: {pr_to_branch}
        Link: {pr_link}
        Commit Messages: {commit_messages}
    '''

def format_data(repo_owner, repo_name, token):
    pull_requests = get_pull_requests(repo_owner, repo_name, token)

    opened_prs = [pr for pr in pull_requests if pr['state'] == 'open' and not pr['draft']]
    closed_prs = [pr for pr in pull_requests if pr['state'] == 'closed']
    draft_prs = [pr for pr in pull_requests if pr['draft']]

    opened_pr_count = len(opened_prs)
    closed_pr_count = len(closed_prs)
    draft_pr_count = len(draft_prs)

    opened_pr_details = [format_pr_details(pr, token) for pr in opened_prs]
    closed_pr_details = [format_pr_details(pr, token) for pr in closed_prs]
    draft_pr_details = [format_pr_details(pr, token) for pr in draft_prs]

    subject = f'Pull Request Summary - {repo_owner}/{repo_name}'
    backslash_char = "\\"
    body = f'''
    Pull Request Summary - {repo_owner}/{repo_name}

    Last week's activity:
    - Opened PRs ({opened_pr_count}):
      {"-" * 50}
      {"{backslash_char}n".join(opened_pr_details)}

    - Closed PRs ({closed_pr_count}):
      {"-" * 50}
      {"{backslash_char}n".join(closed_pr_details)}

    - Draft PRs ({draft_pr_count}):
      {"-" * 50}
      {"{backslash_char}n".join(draft_pr_details)}

    Thank you,
    SailPoint CI Team
    '''
    print(subject)
    print("*****************")
    print(body)
    

print(format_data("anshulc55", "Data_Structure", "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"))