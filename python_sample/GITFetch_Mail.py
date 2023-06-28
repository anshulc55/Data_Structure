import requests
import datetime
import smtplib
from email.mime.text import MIMEText
    
    # Get the current date and calculate the date from one week ago
    today = datetime.date.today()
    last_week = today - datetime.timedelta(days=7)
    
    # Set parameters for the GITHUB API request
    params = {
        'state': 'all',
        'sort': 'created',
        'direction': 'desc',
        'since': last_week.isoformat()
    }
    
    # Construct the API URL
    url = f'https://api.github.com/repos/{repo_owner}/{repo_name}/pulls'
    
    # Send GET request to the GitHub API
    response = requests.get(url, headers=headers, params=params)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Return the JSON response
        return response.json()
    else:
        # Raise an exception with an error message
        raise Exception(f'Error retrieving pull requests: {response.status_code}')




## Funcation - To get Details of a Specific Pull Request
def get_pull_request_details(pull_request, token):
    # Set headers for the API request
    headers = {
        'Authorization': f'Token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }

    # Extract the URL of the pull request
    url = pull_request['url']

    # Send GET request to the GitHub API
    response = requests.get(url, headers=headers)

    # Check if the request was successful
    if response.status_code == 200:
        # Return the JSON response
        return response.json()
    else:
        # Raise an exception with an error message
        raise Exception(f'Error retrieving pull request details: {response.status_code}')


## Funcation - Extract and format PR Data to Readable Format 
def format_pr_details(pr, token):
    # Get pull request details using the provided token
    pr_details = get_pull_request_details(pr, token)

    # Extract relevant information from the pull request details
    pr_number = pr_details['number']
    pr_title = pr_details['title']
    pr_status = pr_details['state']
    pr_owner = pr_details['user']['login']
    pr_from_branch = pr_details['head']['ref']
    pr_to_branch = pr_details['base']['ref']

    # Get the commits URL and retrieve commit messages
    commits_url = pr_details['commits_url'].replace('{/sha}', '')
    commits_response = requests.get(commits_url, headers={'Authorization': f'Token {token}'})
    commits = commits_response.json()
    commit_messages = [commit['commit']['message'] for commit in commits]

    # Extract the pull request link
    pr_link = pr_details['html_url']

    # Handle special character
    backslash_char = "\\"

    # Format the pull request details into a multi-line string
    formatted_details = f'''
        PR #{pr_number}
        Title: {pr_title}
        Status: {pr_status}
        Owner: {pr_owner}
        PR Branches: {pr_from_branch} --> {pr_to_branch}
        PR Link: {pr_link}
        Commit Messages: {commit_messages}
    '''

    return formatted_details


## Funcation - Format the final data for Email and return Email Subject and Body
def format_data(repo_owner, repo_name, token):
    # Get the pull requests for the given repository
    pull_requests = get_pull_requests(repo_owner, repo_name, token)

    # Filter pull requests into different categories
    opened_prs = [pr for pr in pull_requests if pr['state'] == 'open' and not pr['draft']]
    closed_prs = [pr for pr in pull_requests if pr['state'] == 'closed']
    draft_prs = [pr for pr in pull_requests if pr['draft']]

    # Count the number of pull requests in each category
    opened_pr_count = len(opened_prs)
    closed_pr_count = len(closed_prs)
    draft_pr_count = len(draft_prs)

    # Format the details of each pull request in each category
    opened_pr_details = [format_pr_details(pr, token) for pr in opened_prs]
    closed_pr_details = [format_pr_details(pr, token) for pr in closed_prs]
    draft_pr_details = [format_pr_details(pr, token) for pr in draft_prs]

    # Compose the subject of the email
    subject = f'Pull Request Summary - {repo_owner}/{repo_name}'

    # Define a backslash character for formatting in the email body
    backslash_char = "\\"

    # Compose the body of the email with the pull request summary
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

    return subject, body


## Funcation - Email funcation to send the email to requested receint
def send_email(sender, recipient, subject, body):
    # Create a MIMEText object with the email body
    message = MIMEText(body)

    # Set the subject, sender, and recipient of the email
    message['Subject'] = subject
    message['From'] = sender
    message['To'] = recipient

    # SMTP server configuration
    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    smtp_username = '**************' # SMTP Server Username 
    smtp_password = '**************' # SMTP Server Password 

    # Connect to the SMTP server
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        # Initiate a secure connection
        server.starttls()

        # Login to the SMTP server with the username and password
        server.login(smtp_username, smtp_password)

        # Send the email message
        server.send_message(message)


# Set repository owner, repository name, GitHub token, email sender, and email recipient
repo_owner = 'anshulc55'
repo_name = 'Data_Structure'
github_token = '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'
email_sender = 'anshulc55@gmail.com'
email_recipient = 'anshulc55@gmail.com'

try:
    # Retrieve pull requests from the repository
    pull_requests = format_data(repo_owner, repo_name, github_token)

    # Print the first and second pull request
    print(pull_requests[0])
    print("****************")
    print(pull_requests[1])

    # Send an email with the pull requests
    send_email(email_sender, email_recipient, pull_requests[0], pull_requests[1])

    # Print a success message after sending the email
    print('Email sent successfully!')
except Exception as e:
    # Print an error message if an exception occurs
    print(f'Error: {str(e)}')
