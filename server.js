import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "Your_ApiKey",
});

async function main() {
  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: "I have an image of a cat wearing a red bandana, sitting on a windowsill with sunlight streaming through the window."
        // content:
        //   "can u generate the website for meme token using html & css and add animtaion in it and add there three a tags instagram, youtube, twitter",
      },
    ],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main();
