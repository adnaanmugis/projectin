const form = document.getElementById("uploadForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = new FormData(form);

    const res = await fetch(

        "http://localhost:5000/api/notes/upload",

        {

            method: "POST",

            body: data

        }

    );

    const result = await res.json();

    alert("Upload Successful");

    console.log(result);

});