document.getElementById("cancelButton").addEventListener("click", function () {
  alert("Data telah batal diinputkan");
  document.getElementById("form-datadiri").reset(); // Reset the form
});

document.getElementById("saveButton").addEventListener("click", function () {
  const form = document.getElementById("form-datadiri");
  const requiredFields = form.querySelectorAll("[required]");
  let allFilled = true;

  requiredFields.forEach(function (field) {
    if (!field.value) {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Kolom masih kosong.");
  } else {
    alert("Data sudah diinputkan.");
    // Jika Anda ingin mengirim data ke server, Anda dapat menambahkan kode di sini
    // Misalnya: form.submit();
  }
});
