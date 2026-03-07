 let currentTab = "all"
const loadIssues = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json()
    displayData(data.data)
}
loadIssues();


const displayData = (issuesFilter) => {
    const container = document.getElementById("issuesContainer");
    const issueCount = document.getElementById("issueCount")
    container.innerHTML = "";
    if (currentTab === "open") {
        issuesFilter = issues.filter(issue => issue.status === "open")
    }
    if (currentTab === "closed") {
        issuesFilter = issues.filter(issue => issue.status === "closed")
    }

    issueCount.innerText = issuesFilter.length + " Issues"
    issuesFilter.forEach(issue => {
        const borderColor =
            issue.status === "open"
                ? "border-green-500"
                : "border-purple-500"
        const card = document.createElement("div")

        card.className =
            `bg-white p-4 rounded shadow border-t-4 ${borderColor} cursor-pointer hover:shadow-lg transition`

        card.innerHTML = `

<h3 class="font-semibold text-md">${issue.title}</h3>

<p class="text-sm text-gray-500 mt-2">
${issue.description.slice(0, 80)}...
</p>

<div class="flex justify-between items-center mt-4 text-sm">

<span class="bg-gray-200 px-2 py-1 rounded">
${issue.priority}
</span>

<span class="text-gray-500">
${issue.author}
</span>

</div>

`
container.appendChild(card)

    })
}