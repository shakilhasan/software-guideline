//https://codeforces.com/contest/681/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,k=0,a,b;
    char name[100];
    cin>>n;
    while(n--)
    {
        cin>>name>>a>>b;
        if(a>=2400 && a<b )
            k=1;
    }
    if(k==1)
        cout<<"YES";
    else
        cout<<"NO";
}
