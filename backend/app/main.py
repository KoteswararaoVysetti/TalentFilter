from fastapi import FastAPI
from .routers import pdf
from dotenv import load_dotenv
load_dotenv()
app = FastAPI()

# Include routers
app.include_router(pdf.router)