
# 배열과 문자열 1

# **배열 (Array)**

자바스크립트에서 가장 많이 사용하는 **자료구조**의 하나로 ㅡ주로 같은 종류의 값 여러 개를 묶어서 저장하고 관리하기 위해 사용합니다. 
참고로 자바스크립트의 배열은 객체입니다. 


[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

# **배열 만들기 1**

```
var scores = [50, 60, 70];
console.log(scores);
console.log(scores.length);

```

# **인덱스를 이용해서 배열의 원소 읽기**

```
scores[0];
scores[3];
```

# **배열에 값 쓰기**

```
scores[0] = 100;
scores[9] = 50;
```

# **배열의 타입 알아보기**

```
typeof scores
typeof scores[0]

```

# **배열 만들기 2**

```
var a = [];
a[0] = 2;
a[1] = 4;

```

# **배열의 길이 구하기**

```
scores.length;
```

# **배열의 마지막 원소를 읽어 오려면?**

```
scores[scores.length - 1];
```

# **문자열과 배열**

- 문자열과 배열은 비슷한 성질을 많이 가지고 있습니다.
- 문자열: Immutable
- 배열: Mutable
- 배열의 속성과 메소드를 문자열에도 테스트해보세요.

# **배열의 메소드들 1**

### **push(), pop()**

- `push(value)` : 배열의 뒤 쪽에 새로운 원소를 삽입합니다.
- `pop()`: 배열의 마지막 원소를 빼서 변수에 넣어 줍니다. 이 때 변수의 길이는 1 감소합니다.
- 스택(?)처럼 동작하는데 사용합니다.
- 스택에 대해 각자 검색해 보세요.

### **shift(), unshift()**

- `push, pop`과 반대로 동작합니다.
- `unshift(v)`: 배열의 맨 앞에 새로운 값을 추가합니다.
- `shift()`: 배열의 앞에서 값을 빼서 변수에 넣어 줍니다.