---
tags:
  - 收藏
---


- 前言 (Preface)...... xi
    

## 第一部分 基础知识  

### - 1. 因果推断简介 (Introduction to Causal Inference)...... 3
    
- 什么是因果推断？ (What Is Causal Inference?)...... 3
    
- 为什么我们要进行因果推断 (Why We Do Causal Inference)...... 4
    
- 机器学习与因果推断 (Machine Learning and Causal Inference)...... 5
    
- 相关性与因果性 (Association and Causation)...... 6
    
	- 干预与结果 (The Treatment and the Outcome)...... 7
	    
	- 因果推断的根本问题 (The Fundamental Problem of Causal Inference)...... 8
	    
	- 因果模型 (Causal Models)...... 9
	    
	- 干预措施 (Interventions)...... 10
	    
	- 个体干预效应 (Individual Treatment Effect)...... 12
	    
	- 潜在结果 (Potential Outcomes)...... 12
	    
	- 一致性与稳定的单元干预值 (Consistency and Stable Unit Treatment Values)...... 13
	    
	- 关注的因果量 (Causal Quantities of Interest)...... 14
	    
	- 因果量：一个例子 (Causal Quantities: An Example)...... 16
    
- 偏差 (Bias)...... 18
    
	- 偏差方程 (The Bias Equation)...... 19
	    
	- 偏差的直观指南 (A Visual Guide to Bias)...... 21
    
- 识别干预效应 (Identifying the Treatment Effect)...... 23
    
	- 独立性假设 (The Independence Assumption)...... 25
	    
	- 基于随机化的识别 (Identification with Randomization)...... 25
    
- 核心观点 (Key Ideas)...... 28
    
### - 2. 随机实验与统计学复习 (Randomized Experiments and Stats Review)...... 31
    
- 通过随机化实现暴力的独立性 (Brute-Force Independence with Randomization)...... 31
    
- 一个A/B测试的例子 (An A/B Testing Example)...... 33
    
- 理想实验 (The Ideal Experiment)...... 37
    
- 最危险的方程 (The Most Dangerous Equation)...... 38
    
- 我们估计的标准误 (The Standard Error of Our Estimates)...... 41
    
- 置信区间 (Confidence Intervals)...... 42
    
- 假设检验 (Hypothesis Testing)...... 49
    
	- 零假设 (Null Hypothesis)...... 51
	    
	- 检验统计量 (Test Statistic)...... 53
	    
- p值 (p-values)...... 54
    
- 功效 (Power)...... 56
    
- 样本量计算 (Sample Size Calculation)...... 57
    
- 核心观点 (Key Ideas)...... 59
    
### - 3. 图解因果模型 (Graphical Causal Models)...... 61
    
- 思考因果关系 (Thinking About Causality)...... 61
    
	- 因果关系可视化 (Visualizing Causal Relationships)...... 63
	    
	- 顾问值得吗？ (Are Consultants Worth It?)...... 65
    
- 图模型速成课程 (Crash Course in Graphical Models)...... 66
    
	- 链式 (Chains)...... 67
	    
	- 叉式 (Forks)...... 68
	    
	- 不道德性或对撞因子 (Immorality or Collider)...... 70
	    
	- 相关性流动备忘单 (The Flow of Association Cheat Sheet)...... 71
	    
	- 在Python中查询图 (Querying a Graph in Python)...... 72
    
- 再看识别 (Identification Revisited)...... 75
    
- 条件独立假设与调整公式 (CIA and the Adjustment Formula)...... 76
    
- 正向性假设 (Positivity Assumption)...... 78
    
- 一个包含数据的识别例子 (An Identification Example with Data)...... 78
    
- 混杂偏差 (Confounding Bias)...... 80
    
	- 替代混杂 (Surrogate Confounding)...... 81
	    
	- 再看随机化 (Randomization Revisited)...... 82
    
- 选择偏差 (Selection Bias)...... 83
    
	- 对撞因子条件化 (Conditioning on a Collider)...... 83
	    
	- 调整选择偏差 (Adjusting for Selection Bias)...... 87
	    
	- 中介因子条件化 (Conditioning on a Mediator)...... 89
    
- 核心观点 (Key Ideas)...... 90
    

## 第二部分 调整偏差

### - 4. 线性回归的惊人有效性 (The Unreasonable Effectiveness of Linear Regression)...... 95
    
- 你需要的只是线性回归 (All You Need Is Linear Regression)...... 95
    
	- 为什么我们需要模型 (Why We Need Models)...... 96
	    
	- A/B测试中的回归 (Regression in A/B Tests)...... 97
	    
	- 用回归进行调整 (Adjusting with Regression)...... 100
    
- 回归理论 (Regression Theory)...... 104
    
	- 单变量线性回归 (Single Variable Linear Regression)...... 105
	    
	- 多变量线性回归 (Multivariate Linear Regression)...... 105
    
- FWL定理与正交化 (Frisch-Waugh-Lovell Theorem and Orthogonalization)...... 106
    
	- 去偏步骤 (Debiasing Step)...... 107
	    
	- 降噪步骤 (Denoising Step)...... 109
	    
	- 回归估计量的标准误 (Standard Error of the Regression Estimator)...... 110
	    
	- 最终结果模型 (Final Outcome Model)...... 111
	    
	- FWL总结 (FWL Summary)...... 112
    
- 作为结果模型的回归 (Regression as an Outcome Model)...... 114
    
- 正向性与外推 (Positivity and Extrapolation)...... 116
    
- 线性回归中的非线性 (Nonlinearities in Linear Regression)...... 117
    
	- 将干预线性化 (Linearizing the Treatment)...... 119
	    
	- 非线性FWL与去偏 (Nonlinear FWL and Debiasing)...... 121
    
- 傻瓜回归 (Regression for Dummies)...... 122
    
	- 条件随机实验 (Conditionally Random Experiments)...... 122
	    
	- 虚拟变量 (Dummy Variables)...... 124
	    
	- 饱和回归模型 (Saturated Regression Model)...... 127
	    
	- 作为方差加权平均的回归 (Regression as Variance Weighted Average)...... 129
	    
	- 去均值与固定效应 (De-Meaning and Fixed Effects)...... 131
    
- 遗漏变量偏差：从回归的视角看混杂 (Omitted Variable Bias: Confounding Through the Lens of Regression)...... 134
    
- 中性控制变量 (Neutral Controls)...... 135
    
	- 引入噪声的控制变量 (Noise Inducing Control)...... 136
	    
	- 特征选择：偏差-方差权衡 (Feature Selection: A Bias-Variance Trade-Off)...... 138
	    
- 核心观点 (Key Ideas)...... 139
    
### - 5. 倾向得分 (Propensity Score)...... 141
    
- 管理培训的影响 (The Impact of Management Training)...... 141
    
- 用回归进行调整 (Adjusting with Regression)...... 143
    
- 倾向得分 (Propensity Score)...... 144
    
	- 倾向得分估计 (Propensity Score Estimation)...... 145
	    
	- 倾向得分与正交化 (Propensity Score and Orthogonalization)...... 146
	    
	- 倾向得分匹配 (Propensity Score Matching)...... 146
	    
	- 逆倾向加权 (Inverse Propensity Weighting)...... 149
	    
	- 逆倾向加权(IPW)的方差 (Variance of IPW)...... 151
	    
	- 稳定倾向权重 (Stabilized Propensity Weights)...... 155
	    
	- 伪总体 (Pseudo-Populations)...... 156
	    
	- 选择偏差 (Selection Bias)...... 157
	    
	- 偏差-方差权衡 (Bias-Variance Trade-Off)...... 158
	    
	- 正向性 (Positivity)...... 159
	    
	- 基于设计与基于模型的识别 (Design- Versus Model-Based Identification)...... 161
    
- 双重稳健估计 (Doubly Robust Estimation)...... 162
    
- 干预易于建模 (Treatment Is Easy to Model)...... 164
    
	- 结果易于建模 (Outcome Is Easy to Model)...... 167
	    
	- 连续干预的广义倾向得分 (Generalized Propensity Score for Continuous Treatment)...... 169
    
- 核心观点 (Key Ideas)...... 175
    

## 第三部分 效应异质性与个性化

### - 6. 效应异质性 (Effect Heterogeneity)...... 179
    
- 从平均干预效应(ATE)到条件平均干预效应(CATE) (From ATE to CATE)...... 179
    
- 为什么预测不是答案 (Why Prediction Is Not the Answer)...... 181
    
- 使用回归的CATE (CATE with Regression)...... 183
    
- 评估CATE预测 (Evaluating CATE Predictions)...... 187
    
- 按模型分位数的效应 (Effect by Model Quantile)...... 189
    
- 累积效应 (Cumulative Effect)...... 192
    
- 累积增益 (Cumulative Gain)...... 194
    
- 目标变换 (Target Transformation)...... 197
    
- 预测模型何时适用于效应排序 (When Prediction Models Are Good for Effect Ordering)...... 199
    
	- 边际递减回报 (Marginal Decreasing Returns)...... 199
	    
	- 二元结果 (Binary Outcomes)...... 200
    
- 用于决策的CATE (CATE for Decision Making)...... 201
    
- 核心观点 (Key Ideas)...... 205
    
### - 7. 元学习器 (Metalearners)...... 207
    
- 离散干预的元学习器 (Metalearners for Discrete Treatments)...... 208
    
	- T-Learner...... 209
	    
	- X-Learner...... 212
    
- 连续干预的元学习器 (Metalearners for Continuous Treatments)...... 217
    
	- S-Learner...... 218
	    
	- 双重/去偏机器学习 (Double/Debiased Machine Learning)...... 223
    
- 核心观点 (Key Ideas)...... 230
    

## 第四部分 面板数据

### - 8. 双重差分法 (Difference-in-Differences)...... 235
    
- 面板数据 (Panel Data)...... 236
    
- 经典双重差分法 (Canonical Difference-in-Differences)...... 239
    
	- 带有结果增长的DID (Diff-in-Diff with Outcome Growth)...... 240
	    
	- 使用普通最小二乘法(OLS)的DID (Diff-in-Diff with OLS)...... 242
	    
	- 带有固定效应的DID (Diff-in-Diff with Fixed Effects)...... 243
	    
	- 多时期 (Multiple Time Periods)...... 244
	    
	- 推断 (Inference)...... 246
    
- 识别假设 (Identification Assumptions)...... 249
    
	- 平行趋势 (Parallel Trends)...... 249
	    
	- 无预期假设与稳定单元干预值假设(SUTVA) (No Anticipation Assumption and SUTVA)...... 251
	    
	- 严格外生性 (Strict Exogeneity)...... 252
	    
	- 无时变混杂因素 (No Time Varying Confounders)...... 252
	    
	- 无反馈 (No Feedback)...... 253
	    
	- 无结转效应与无滞后因变量 (No Carryover and No Lagged Dependent Variable)...... 254
    
- 随时间变化的效应动态 (Effect Dynamics over Time)...... 255
    
- 带有协变量的DID (Diff-in-Diff with Covariates)...... 257
    
- 双重稳健DID (Doubly Robust Diff-in-Diff)...... 260
    
	- 倾向得分模型 (Propensity Score Model)...... 260
	    
	- 差分结果模型 (Delta Outcome Model)...... 260
	    
	- 现在汇总起来 (All Together Now)...... 261
    
- 错开采用 (Staggered Adoption)...... 263
    
	- 随时间变化的异质效应 (Heterogeneous Effect over Time)...... 268
	    
	- 协变量 (Covariates)...... 272
    
- 核心观点 (Key Ideas)...... 273
    
### - 9. 合成控制法 (Synthetic Control)...... 275
    
- 在线营销数据集 (Online Marketing Dataset)...... 275
    
- 矩阵表示 (Matrix Representation)...... 278
    
- 作为水平回归的合成控制法 (Synthetic Control as Horizontal Regression)...... 280
    
- 经典合成控制法 (Canonical Synthetic Control)...... 284
    
- 带有协变量的合成控制法 (Synthetic Control with Covariants)...... 287
    
- 去偏合成控制法 (Debiasing Synthetic Control)...... 291
    
- 推断 (Inference)...... 295
    
- 合成双重差分法 (Synthetic Difference-in-Differences)...... 298
    
	- DID复习 (DID Refresher)...... 298
	    
	- 再看合成控制法 (Synthetic Controls Revisited)...... 298
	    
	- 估计时间权重 (Estimating Time Weights)...... 301
	    
	- 合成控制法与DID (Synthetic Control and DID)...... 303
    
- 核心观点 (Key Ideas)...... 305
    

## 第五部分 替代实验设计

### - 10. 地理与切换实验 (Geo and Switchback Experiments)...... 309
    
- 地理实验 (Geo-Experiments)...... 310
    
- 合成控制设计 (Synthetic Control Design)...... 311
    
	- 尝试一组随机干预单元 (Trying a Random Set of Treated Units)...... 314
	    
	- 随机搜索 (Random Search)...... 316
    
- 切换实验 (Switchback Experiment)...... 319
    
	- 序列的潜在结果 (Potential Outcomes of Sequences)...... 321
	    
	- 估计结转效应的阶数 (Estimating the Order of Carryover Effect)...... 321
	    
	- 基于设计的估计 (Design-Based Estimation)...... 324
	    
	- 最优切换设计 (Optimal Switchback Design)...... 328
    
	- 稳健方差 (Robust Variance)...... 331
    
- 核心观点 (Key Ideas)...... 334
    
### - 11. 不依从性与工具变量 (Noncompliance and Instruments)...... 337
    
- 不依从性 (Noncompliance)...... 337
    
- 扩展潜在结果 (Extending Potential Outcomes)...... 339
    
- 工具变量识别假设 (Instrument Identification Assumptions)...... 342
    
- 第一阶段 (First Stage)...... 344
    
- 简化形式 (Reduced Form)...... 345
    
- 两阶段最小二乘法 (Two-Stage Least Squares)...... 346
    
- 标准误 (Standard Error)...... 347
    
- 额外控制变量与工具变量 (Additional Controls and Instruments)...... 349
    
	- 手动两阶段最小二乘法(2SLS) (2SLS by Hand)...... 351
	    
	- 矩阵实现 (Matrix Implementation)...... 351
    
- 断点设计 (Discontinuity Design)...... 353
    
	- 断点设计假设 (Discontinuity Design Assumptions)...... 355
	    
	- 意向干预效应 (Intention to Treat Effect)...... 356
	    
	- IV估计 (The IV Estimate)...... 357
	    
	- 聚束效应 (Bunching)...... 358
    
- 核心观点 (Key Ideas)...... 359
    
### - 12. 下一步 (Next Steps)...... 361
    
- 因果发现 (Causal Discovery)...... 362
    
- 序列决策 (Sequential Decision Making)...... 362
    
- 因果强化学习 (Causal Reinforcement Learning)...... 363
    
- 因果预测 (Causal Forecasting)...... 363
    
- 领域自适应 (Domain Adaptation)...... 364
    
- 结束语 (Closing Thoughts)...... 365
    
- 索引 (Index)...... 367