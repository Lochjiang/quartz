---
tags: Python
---
### 范例

```python
transform bright:
    linear 0.05 alpha 1.0

transform dark:
    linear 0.05 alpha 0.5

transform vague:
    linear 0.05 blur 10

init python:
    from functools import partial
    def speak(char, event_name, *args, **kwargs):
        if event_name == "begin":
            tags = renpy.get_showing_tags()
            for tag in tags:
                if tag == char:
                    renpy.show(tag,[bright])
                elif tag == 'bg':
                    renpy.show(tag,[vague])
                else:
                    renpy.show(tag,[dark])

define l = Character('xxx',callback=partial(speak,'lzp'))
```