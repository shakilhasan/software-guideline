//https://codeforces.com/contest/703/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,mi=0,ci=0,a,b;
    cin>>n;
    while(n--)
    {
        cin>>a>>b;
        if(a>b)
            mi++;
        else if(b>a)
            ci++;
    }
    if(mi>ci)
        cout<<"Mishka";
    else if(ci>mi)
        cout<<"Chris";
    else
        cout<<"Friendship is magic!^^";
}
