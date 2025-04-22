#include <bits/stdc++.h>
using namespace std;

#define endl '\n'
const int MOD = 1e9 + 7;
#define int long long

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    string s;
    cin>>s;
    int n= s.size();
    int i=0, j=n;
    bool flag =true;
    while(i<=j){
        string x= s.substr(0,n/2+1), y = s.substr(i,n-i);
        if(x==y){
            cout<<"YES"<<endl;
            cout<<x;
            break;
            flag = false;
        }

    }
    if(!flag){
        cout<<"NO";
    }

    return 0;
}