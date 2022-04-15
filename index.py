import requests

url = "https://hiring.bajajfinservhealth.in/api/renderMe?login&avatar_url&html_url&type"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
