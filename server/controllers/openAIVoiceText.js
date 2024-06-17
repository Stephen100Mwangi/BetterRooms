import OpenAI from "openai";
import dotenv from 'dotenv'

dotenv.config();

const openAI = new OpenAI({
    apiKey: 'sk-proj-gVITynrgGkZpbu1YGDD2T3BlbkFJLkjZtN19pBMhEoXfE9IB',
})

async function main(){
    const completion = await openAI.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

main();