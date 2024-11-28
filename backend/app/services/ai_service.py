import os
from openai import OpenAI

token = os.environ["OPENAI_API_KEY"]
endpoint = "https://models.inference.ai.azure.com"
model_name = "gpt-4o-mini"

client = OpenAI(
    base_url=endpoint,
    api_key=token,
)

def get_ai_response(prompt: str) -> str:
    try:
        response = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are an Highly skilled HR and Talent Aquisition lead. You need to scan the data of a resume share by an applicant for a role in your company. You are also highly skilled technical person. Process the resume data and review the application",
                },
                {
                    "role": "user",
                    "content": f"{prompt}",
                }
            ],
            temperature=1.0,
            top_p=1.0,
            max_tokens=1000,
            model=model_name
        )
        return response.choices[0].message.content
    except Exception as e:
        return str(e)
