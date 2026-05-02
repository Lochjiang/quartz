---
tags:
  - Python
---
```python
import logging

logging.basicConfig(handlers=[logging.StreamHandler(), 
                              logging.FileHandler('运行日志.log', mode='w', encoding='utf-8')], 
                              format='%(asctime)s - %(levelname)s: %(message)s', #`%(`：表示开始一个格式化字段。`s`：表示将参数格式化为字符串。
                              datefmt='%Y-%m-%d %H:%M:%S', 
                              level=logging.INFO)

logging.debug('这是一条debug日志')
logging.info('这是一条info日志')
logging.warning('这是一条warning日志')
logging.error('这是一条error日志')
logging.critical('这是一条critical日志')
```