from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
from app.services.ai_service import get_ai_response
import fitz  # PyMuPDF

router = APIRouter()

def extract_text_from_pdf(file) -> str:
    """Extract text from PDF using PyMuPDF"""
    doc = fitz.open(stream=file, filetype="pdf")  # Open PDF from the uploaded file stream
    text = ""
    
    for page in doc:
        text += page.get_text("text")  # Extract text from each page
    
    return text

@router.post("/process-resume/")
async def process_resume(file: UploadFile = File(...)):
    """Accept PDF file, extract text and return it as string"""
    
    try:
        # Read the PDF file content
        pdf_content = await file.read()
        
        # Extract text from the PDF
        extracted_text = extract_text_from_pdf(pdf_content)

        res = get_ai_response(f"Please review the following resume text and provide feedback:\n\n{extracted_text}")
        
        return JSONResponse(content={"text": res})
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)