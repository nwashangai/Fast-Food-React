window.onclick = (event) => {
  if (event.target == document.getElementById('add-food')) {
      document.getElementById('add-food').style.display = 'none';
  }
  if (event.target == document.getElementById('close-btn')) {
      document.getElementById('alert').style.display = 'none';
  }
  if (event.target == document.getElementById('view-food')) {
      document.getElementById('view-food').style.display = 'none';
  }
  if (event.target == document.getElementById('order-food')) {
      document.getElementById('order-food').style.display = 'none';
  }
}