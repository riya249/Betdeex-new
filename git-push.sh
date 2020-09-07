echo "Fetch working directory status: "
git status

echo "Enter Commit Message: "
read message

git add . && git commit -m '$message' && git push

