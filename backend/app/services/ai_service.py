import os
from openai import OpenAI
import json

token = os.environ["OPENAI_API_KEY"]
endpoint = "https://models.inference.ai.azure.com"
model_name = "gpt-4o-mini"

client = OpenAI(
    base_url=endpoint,
    api_key=token,
)

def get_ai_response(role: str, skills: str, resumeData: str) -> str:
    try:
        userData = resumeData.split(' ')
        if len(userData) > 3000 :
            userData = userData[:3000]
        userData = ' '.join(userData)
        response = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": f"You are an Highly skilled HR and Talent Aquisition lead. You need to scan the data of a resume share by an applicant for a {role} role in your company. You are also highly skilled technical person with skills {skills}." + "Provide only a json response that can be converted into object easily in python(example: { \"key1\" : \"value1\", \"key2\" : \"value2\"}) with properties: matching score, matched skills, missed skills, additional skills. Note: don't mention the name 'json' in response",
                },
                {
                    "role": "user",
                    "content": f"{userData}",
                }
            ],
            temperature=1.0,
            top_p=1.0,
            max_tokens=1000,
            model=model_name
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        return str(e)
