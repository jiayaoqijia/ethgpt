# ChatBot for Ethereum Codebase and Docs

[ETHGPT](https://www.ethgpt.org): a GPT-powered ChatBot for accurate Ethereum info. We've compiled resources like go-ethereum and ethresear.ch to enhance ChatGPT's knowledge, keeping you updated on Ethereum's latest developments. ETHGPT streamlines access to Ethereum-related info, benefiting users/developers.

![ETHGPT's frontpage](https://github.com/jiayaoqijia/ethgpt/blob/main/public/ethgpt_frontpage.png)

Over the past 8 years, Ethereum has evolved with numerous updates, documentation, and codebases. With scattered materials and no centralized hub for information, it's been challenging for developers and users to stay updated on the latest Ethereum news and codebase explanations, such as the Shapella upgrade.
Introducing ETHGPT - a GPT-powered ChatBot designed to answer all your Ethereum-related questions quickly and accurately. We've generated documentation for the Go-Ethereum codebase and incorporated various Ethereum resources like https://ethresear.ch/.
By storing generated vectors, we enable users to ask questions and index the vector database. This provides precise contextual information as prompts to GPT, resulting in concise responses.
As ChatGPT's knowledge is limited to September 2021, it lacks the latest Ethereum updates, such as the Shanghai upgrade. However, our newly generated documentation and resources provide the necessary context to guide ChatGPT in finding accurate answers. We generated documentation for Go-Ethereum at https://github.com/jiayaoqijia/ethgpt/tree/main/data/go-ethereum-md/go-ethereum.
We believe ETHGPT will significantly improve the efficiency of accessing Ethereum-related information, helping users and developers better understand the Ethereum ecosystem.

### Demo
[ETHGPT](https://www.ethgpt.org): https://www.ethgpt.org

[Demo Video](https://www.youtube.com/watch?v=qbAwxJqtp54): https://www.youtube.com/watch?v=qbAwxJqtp54

### Comparison

As ChatGPT's knowledge is limited to September 2021, it lacks the latest Ethereum updates, such as the Shanghai upgrade. ETHGPT can provide more precise answers for Shanghai/Shapella upgrade.
![ChatGPT's reply](https://github.com/jiayaoqijia/ethgpt/blob/main/public/ethgpt_chatgpt.png) ![ETHGPT's reply](https://github.com/jiayaoqijia/ethgpt/blob/main/public/ethgpt_comparison.png)



### Prerequisites
Node.js v16+

### Clone

```
git clone git@github.com:jiayaoqijia/ethgpt.git
```

### Install

```
pnpm install
```

### Edit `.env`

Copy `.env.example` to `.env`
Edit OPENAI API KEY.  


### Run

```
pnpm run dev
```

### Credit

This project is inspired by [Zahid](https://github.com/zahidkhawaja) and [Mayo](https://github.com/mayooear/).