# schedular

 make "Schedule-To-Do list"

 result **[[Here](https://github.com/Cj-K-7/scheduler/)]**

 npx create-react-app --template typescript

## Library
- ## **Recoil**
hook 사용법 핵심

 1. atom
```typescript
 atom<Type>({
    key : "key",
    default : //default value
});
```
 2.selector
```typescript
 selector({
    key : "key",
    get : ({ get, getCallback }) =>{
        const result = get(atom());
        return result;
    }
});
```
- styled-components / @types/styled-components
