//https://codeforces.com/contest/266/problem/B
#include<iostream>
using namespace std;
main()
{
    int n,t,i,j;
    char a[50];
    cin>>n>>t>>a;
    while(t--)
    {
        for(j=0;j<n;j++)
        {
            if(a[j]=='B'&&a[j+1]=='G')
            {  a[j]='G';   a[j+1]='B'; j++;   }

        }
    }

    cout<<a;
}
