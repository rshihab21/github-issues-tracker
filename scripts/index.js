const container = document.getElementById("issuesContainer")
const loader = document.getElementById("loader")
const issueCount = document.getElementById("issueCount")

let issues = []
let currentTab = "all"


async function loadIssues() {
    loader.classList.remove("hidden")
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json()
    issues = data.data
    displayIssues()
    loader.classList.add("hidden")

}

function displayIssues() {
    container.innerHTML = ""
    let filtered = issues
    if (currentTab === "open") {
        filtered = issues.filter(issue => issue.status === "open")
    }
    if (currentTab === "closed") {
        filtered = issues.filter(issue => issue.status === "closed")
    }
    issueCount.innerText = filtered.length + " Issues"

    filtered.forEach(issue => {
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





document.querySelectorAll(".tabBtn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".tabBtn").forEach(b => {
            b.classList.remove("bg-purple-600", "text-white")
            b.classList.add("bg-gray-200")
        })

        btn.classList.add("bg-purple-600", "text-white")

        currentTab = btn.dataset.tab

        displayIssues()

    })

})



loadIssues()