const form = document.querySelector('form');
const listaContatos = document.querySelector('#lista-contatos');

let contatos = [];

if (localStorage.getItem('contatos')) {
	contatos = JSON.parse(localStorage.getItem('contatos'));
}

function mostrarContatos() {
	listaContatos.innerHTML = '';

	contatos.forEach(function(contato) {
		const li = document.createElement('li');
		li.innerHTML = `<strong>${contato.nome}</strong> - ${contato.email} - ${contato.telefone}`;
		listaContatos.appendChild(li);
	});
}

mostrarContatos();

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const nome = document.querySelector('#nome').value;
	const email = document.querySelector('#email').value;
	const telefone = document.querySelector('#telefone').value;

	const contato = {
		nome,
		email,
		telefone
	};

	contatos.push(contato);
	localStorage.setItem('contatos', JSON.stringify(contatos));

	mostrarContatos();

	form.reset();
});

