async function loadVideos() {

    const res = await fetch("http://localhost:5000/api/videos");

    const videos = await res.json();

    let html = "";

    videos.forEach(video => {

        html += `

<div class="card mt-3 p-3">

<h4>${video.title}</h4>

<p>${video.subject}</p>

<a href="${video.url}" target="_blank">

Watch Video

</a>

</div>

`;

    });

    document.getElementById("videos").innerHTML = html;

}

loadVideos();