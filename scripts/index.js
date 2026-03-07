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
            <div class="flex justify-between items-start">
            <div class="w-8 h-8 rounded-full flex items-center justify-center
            ${issue.status === "open" ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600"}">
           ${issue.priority === "high" || issue.priority === "medium"
                ? '<img src="./assets/Open-Status.png"/>'
                : '<img src="./assets/close-status.png"/>'}
            
           
            </div>
            <span class="text-xs px-3 py-1 rounded-full font-semibold 
            ${issue.priority === "high"
                ? "bg-[#FEECEC] text-[#F15959]"
                : issue.priority === "medium"
                    ? "bg-[#FFF6D1] text-[#F6A924]"
                    : "bg-gray-200 text-gray-600"
            }">
            ${issue.priority}
            </span>
            </div>
            <h3 class="font-semibold text-lg mt-3">
            ${issue.title}
            </h3>
            <p class="text-gray-500 text-sm mt-2">
            ${issue.description.slice(0, 90)}...
            </p>
            <div class="flex gap-2 mt-3">
            <span class="text-xs px-3 py-1 rounded-full border border-red-200 text-red-500 bg-red-50">
            🐞 BUG
            </span>
            <span class="text-xs px-3 py-1 rounded-full border border-yellow-300 text-yellow-600 bg-yellow-50">
            🧑 HELP WANTED
            </span>
            </div>
            <div class="border-t mt-4 pt-3 text-sm text-gray-500">
            <p>#${issue.id || 1} by ${issue.author}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
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