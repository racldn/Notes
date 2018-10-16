Notes

### To Create A New Branch
```
git checkout -b your_branch_name
```

### To Load Into A Branch
```
git checkout your_branch_name
git pull origin your_branch_name
```

### To Merge:
```
(in your_branch_name)
git checkout origin
git merge --no-ff your_branch_name
:wq
git push origin HEAD:master
git checkout master
```
