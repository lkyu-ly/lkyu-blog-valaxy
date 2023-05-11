---
title: 猴博士C语言第二课笔记
author: lkyu
readmore: true
tags:
  - 笔记
  - C语言
categories:
  - 笔记
abbrlink: 394800809
date: 2022-09-09 00:00:00
updated: 2022-09-11 00:00:00
description:
---

C 语言基本语句 2

<!-- more -->

## 课时 2 C 语言基本语句 2

### 用 scanf 语输入 int、float、double、char 型数据

float 型

```c
float a,b;
scanf("%f,%f",&a,&b);
```

double 型

```c
double a,b;
scanf("%lf,%lf",&a,&b);
```

char 型

```c
char a,b;
scanf("%c.%d",&a,&b);
```

#### 例：请编程序,输入一个大写字母,可以输出一个小写字母

> 答案见上一篇笔记

### putchar()语句、getchar()语句

> 例

```c
# include<stdio.h>
int main()
{
char a,b,c;
a=getchar():
b=getchar():
c=getchar()
a=a+32;
b=b+32;
c=c+32;
putchar(a);
putchar(b);
putchar(c);
putchar(\n');
return 0;
}
```

> 运行结果：
> 输入“BOY”
>
> > boy

### e^x、logx 等数学运算

| 函数  | 功能              | 使用方法                  |
| :---: | :---------------- | :------------------------ |
|  abs  | 求整数 x 的绝对值 | int x;<br/>abs(x);        |
| fabs  | 求 x 的绝对值     | double x;<br/>vfabs(x);   |
|  exp  | 求 e^x            | double x;<br/>exp(x);     |
|  pow  | 求 x^y            | double x,y;<br/>pow(x,y); |
|  sin  | 求 sinx           | double x;<br/>sin(x);     |
|  cos  | 求 cosx           | double x;<br/>cos(x);     |
|  tan  | 求 tanx           | double x;<br/>tan(x);     |
| sqrt  | 开根号            | double x;<br/>sqrt(x);    |
|  log  | 求 lnx            | double x;<br/>log(x);     |
| log10 | 求 lgx            | double x;<br/>log10(x);   |

#### 用法

```c
#include<stdio.h>
#include<math.h>
int main()
{
    //代码
}
return 0;
```

#### 例 1

> 给出三角形三边 a、b、c 的长,利用公式`area=√[s(s-a)(s-b)(s-c)]`求该三角形的面积 area. (`s=(a+b+c)/2`)

```c
#include<stdio.h>
#include<math.h>
int main()
{
    double a,b,c,s,area;
    scanf("%lf,%lf,%lf",&a,&b,&c);
    s=(a+b+c)/2;
    area=sqrt(s*(s-a)*(s-b)*(s-c));
    printf("a=%f\tb=%f\tc=%f\n",a,b,c);
    printf("area=%f",area);
    return 0;
}
```

#### 例 2

> 利用`x=[-b±√(b^2-4ac)]/2a`求`a^2+bx+c=0`的两个根。a、b、c 由键盘输入,且`b^2-4ac>0`

```c
#include<stdio.h>
#include<math.h>
int main()
{
    double a,b,c,d,x1,x2;
    scanf("%lf,%lf, %lf",&a,&b,&c);
    d=sqrt(b*b-4*a*c);
    x1=(-b+d) /(2*a);
    x2=(-b-d) /(2*a);
    printf("x1=%f\n",x1);
    printf("x2=%f\n",x2);
    return 0;
}
```

#### 例 3

> 假如猴博士同事傻狍子的年薪增长率为-10%，请利用公式`p=（1+r）^n`计算 10 年后他的年薪与今年相比增长了多少。（公式中的 r 为年增长率， n 为年数，p 为与今年相比的倍数）

```c
# include<stdio.h>
# include<math.h>
int main()
{
    double r,n,p;
    r=-0.1;
    n=10;
    p=pow(1+r,n);
    printf("p=%f\n",p);
    return 0;
}
```
