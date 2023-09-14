// https://leetcode.com/problems/valid-anagram
function isAnagram(s: string, t: string): boolean {
    let a = [...s];
    let b=[...t];

    for(let i=0; i<a.length; i++){
        const index = b.indexOf(a[i]);
        if (index !== -1) {
            b.splice(index, 1);
        }
    }
    if(b.length || s.length!=t.length) return false
    return true
}
function isAnagram2(s: string, t: string): boolean {
    let hash:any={}
    for(let i=0;i<s.length;i++){
        if(hash[s[i]])hash[s[i]]=hash[s[i]]+1
        else hash[s[i]]=1
        if(hash[t[i]])hash[t[i]]=hash[t[i]]-1
        else hash[t[i]]=-1
    }
    const valuesArray: number[] = Object.values(hash);
    const sum: number = valuesArray.reduce((acc, curr) => acc + curr, 0);
    return !sum;
}
