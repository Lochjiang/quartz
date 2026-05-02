---
tags:
  - Python
---
### 函数

| 函数                  | 库           | 功能       |
| ------------------- | ----------- | -------- |
| `matrix_power(A,n)` | `np.linalg` | 计算 $A^n$ |

### 判断谱半径是否小于1

```python
import numpy as np

def is_spectral_radius_less_than_one(A):
    # 计算所有特征值
    eigenvalues = np.linalg.eigvals(A)
    # 取绝对值的最大值
    spectral_radius = max(abs(eigenvalues))
    
    print(f"谱半径为: {spectral_radius}")
    return spectral_radius < 1

# 示例
A = np.array([[0.5, 0.2],
              [0.1, 0.5]])
print(f"是否小于1? {is_spectral_radius_less_than_one(A)}")
```