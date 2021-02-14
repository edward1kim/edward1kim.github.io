date=$(date '+%Y-%m-%d')
title_lower=`echo $1 | tr '[:upper:]' '[:lower:]'`

echo "---\ntitle: \"$1\"\ndate: $date\ncategory: [\"$2\"]\nisHead: false\n---"
echo "---\ntitle: \"$1\"\ndate: $date\ncategory: [\"$2\"]\nisHead: false\n---" > ./src/pages/$2/"$date-${title_lower// /-}.md"

code ./src/pages/$2/"$date-${title_lower// /-}.md"


