---
tags:
  - 资料
---

```table-of-contents
title: ## 目录
style: nestedList # TOC style (nestedList|nestedOrderedList|inlineFirstLevel)
minLevel: 0 # Include headings from the specified level
maxLevel: 0 # Include headings up to the specified level
include: 
exclude: 
includeLinks: true # Make headings clickable
hideWhenEmpty: false # Hide TOC if no headings are found
debugInConsole: false # Print debug info in Obsidian console
```

- $ [推理模型 (deepseek-reasoner) | DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/guides/reasoning_model)

## API

````tabs
tab: Deeepseek
api_key:
```
sk-c059e59db34442ce87b8f569f0434f02
```
base_url:
```
https://api.deepseek.com
```
tab: 硅基流动
```
sk-lpgraclctxqnoqxguxstgbvvwgssgxlobsxyoobvfmxkppfb
```
````

## python 调用本地 ollama

```python
# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="ollama", base_url="http://localhost:11434/v1")

response = client.chat.completions.create(
    model="gemma2:latest",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```

## 安卓连接电脑 ollama API 域名

```
http://192.168.1.75:11434
```

查找 ip 方法：

```mermaid
graph LR
右键wifi---网络和Internet设置---属性---IPv4地址
```
## OpenAI参数快捷复制

````tabs
tab: gemma3
```python
client = OpenAI(api_key="ollama", base_url="http://localhost:11434/v1") 
model = "gemma3"
```
tab: deepseek
```python
client = OpenAI(api_key="sk-c059e59db34442ce87b8f569f0434f02",base_url="https://api.deepseek.com")
model = "deepseek-chat"
```
tab: 硅基流动
```python
client = OpenAI(api_key="sk-lpgraclctxqnoqxguxstgbvvwgssgxlobsxyoobvfmxkppfb", base_url="https://api.siliconflow.cn/v1")
model = "deepseek-ai/DeepSeek-R1-0528-Qwen3-8B"
```
````

## 模型列表
````tabs
tab: deepseek-r1
```
deepseek-r1:14b
```
tab: qwen
```
qwen2.5:14b
```
tab: deepseek-v2
```
deepseek-v2:latest
```
tab: saiga_nemo
```
hf.co/IlyaGusev/saiga_nemo_12b_gguf:Q6_K
```
tab: gemma2
```
gemma2:latest
```
````
## 结构化输出

- $ [Structured Outputs - OpenAI API](https://platform.openai.com/docs/guides/structured-outputs)

```python
from pydantic import BaseModel
from openai import OpenAI

client = OpenAI(api_key="ollama", base_url="http://localhost:11434/v1")

class CalendarEvent(BaseModel):
    name: str
    date: str
    participants: list[str]

completion = client.beta.chat.completions.parse(
    model="gemma2:latest",
    messages=[
        {"role": "system", "content": "Extract the event information."},
        {"role": "user", "content": "Alice and Bob are going to a science fair on Friday."},
    ],
    response_format=CalendarEvent,
)

event = completion.choices[0].message.parsed
```

## 多轮对话
```python
from openai import OpenAI

client = OpenAI(api_key="ollama", base_url="http://localhost:11434/v1")
model = "gemma2:latest"

messages = []
prompt = "You are a helpful assistant"
messages.append({"role": "system", "content": prompt})
```

```
userContent = "你好"
messages.append({"role": "user", "content": userContent})

```

```
response = client.chat.completions.create(
    model=model,
    messages=messages
)

messages.append(response.choices[0].message)
response.choices[0].message.content
```

```
messages
```

## 语义分析

```python
# %%
def ask_ai(userContent):
    from openai import OpenAI
    
    client = OpenAI(api_key="sk-c059e59db34442ce87b8f569f0434f02",base_url="https://api.deepseek.com")
    model = "deepseek-chat"

    messages = []
    prompt = "你是一个人工智能助手，用户将给到你一条关于股市的评论，你根据评论进行情感评分，\
    以判断评论者对于股市的乐观程度，评分范围为-1,0,1。其中，0分表示不积极也不消极，-1表示消极，1表示积极。\
    注意：当前正在进行结构化输出，给出分数即可，否则将影响信息质量。"
    messages.append({"role": "system", "content": prompt})
    messages.append({"role": "user", "content": userContent})

    response = client.chat.completions.create(
    model=model,
    messages=messages
)
    return response.choices[0].message.content


# %%
import pandas as pd
# df = pd.read_excel('artificially tagging data.xlsx').iloc[:100,2:]
df = pd.read_csv('sampled_20000.csv').iloc[:20,2:]
df['AI_response'] = pd.Series([])

# %%
def func(i):
    try:
        df.loc[i,'AI_response'] = ask_ai(df.loc[i,'head'])
        print('进度：',i+1,'/',len(df),sep='')
        if i % 200 == 0:
            df.to_excel('test.xlsx')
    except Exception as e:
        print(f"Error at index {i}: {e}")


# %%
from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor(max_workers=20) as t:  # 创建一个最大容纳数量为5的线程池
    tasks = [t.submit(func, i) for i in range(len(df))]
df.to_excel('final_output.xlsx')


# %%
df[['head','AI_response']]
```