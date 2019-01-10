function getGreeting(name: string): string {
  return (name) ? `Hello ${name}!` : 'Type your name please!';
}

function handleKeyUp(e: KeyboardEvent) {
  const input = <HTMLInputElement>e.target;
  const name = input.value;
  const greeting = getGreeting(name);
  const output = document.querySelector('.greeting-output');

  output.textContent = greeting;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = <HTMLInputElement>document.querySelector('.greeting-input');
  input.addEventListener('keyup', handleKeyUp);
});
