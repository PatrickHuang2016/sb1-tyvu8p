import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { problem, code } = req.body;

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        Problem: ${problem.title}
        Description: ${problem.description}
        Difficulty: ${problem.difficulty}
        
        User's code:
        ${code}
        
        Please review this code and provide:
        1. A brief explanation of the solution
        2. Time and space complexity analysis
        3. Suggestions for improvement (if any)
        4. A score out of 10 based on correctness, efficiency, and code quality
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const review = response.text();

      res.status(200).json({ review });
    } catch (error) {
      console.error('Error in code review:', error);
      res.status(500).json({ error: 'Failed to process code review' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}