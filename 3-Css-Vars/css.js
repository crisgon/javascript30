const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(this.name);
  console.log(this.value);
}

inputs.forEach(item => item.addEventListener('change', handleUpdate));
inputs.forEach(item => item.addEventListener('mouseover', handleUpdate));

