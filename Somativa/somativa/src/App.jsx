import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("Palestra");
  const [eventVagas, setEventVagas] = useState(10);
  const [eventList, setEventList] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const typeOrder = {
    "Workshop": 2,
    "Palestra": 1,
    "Painel": 1
  }

  // Carregar dados iniciais do LocalStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem("@eventpulse_data");
    if (savedEvents) setEventList(JSON.parse(savedEvents));
  }, []);

  // Sincronizar alterações com o LocalStorage
  useEffect(() => {
    localStorage.setItem("@eventpulse_data", JSON.stringify(eventList));
  }, [eventList]);

  const addEvent = (e) => {
    e.preventDefault();
    if (!eventTitle.trim()) return;

    const newEvent = {
      id: crypto.randomUUID(),
      title: eventTitle,
      type: eventType,
      status: "Agendado", // Status inicial padrão
      vagas: eventVagas,
      date: new Date().toLocaleDateString()
    };

    setEventList([newEvent, ...eventList]);
    setEventTitle("");
  };

  const toggleStatus = (id) => {

    setEventList(eventList.map(evt => {
      if (evt.id === id) {
        // Rotaciona o status do evento sequencialmente
        const nextStatus = evt.status === "Agendado" ? "Em Andamento" :
          evt.status === "Em Andamento" ? "Encerrado" : "Agendado";
        return { ...evt, status: nextStatus };
      }
      return evt;
    }));
  };

  const inscreverAluno = (id) => {
    setEventList(eventList.map(evt => {
      if (evt.id === id && evt.vagas > 0) {
        return {...evt, vagas: evt.vagas -1}
      }
      return evt
    }));
  }

  const deleteEvent = (id) => {
    setEventList(eventList.filter(evt => evt.id !== id));
  };

  const limparLista = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja limpar todo o cronograma?"
    );

    if (confirmDelete) {
      localStorage.removeItem("@eventpulse_data");
      setEventList([]);
    }
  }

  const filteredEvents = eventList
  .filter(evt => {
    if (filter === "Agendados") return evt.status === "Agendado";
    if (filter === "Em Andamento") return evt.status === "Em Andamento";
    if (filter === "Encerrados") return evt.status === "Encerrado";

    if (!evt.title.toLowerCase().includes(search.toLowerCase())) return false;

    return true;
  })
  .sort((a, b) => {
    return typeOrder[b.type] - typeOrder[a.type];
  });

  return (
    <div className="app-container">
      <header>
        <h1>EventPulse</h1>
        <p>Gestão de Eventos Acadêmicos</p>
      </header>

      <section className="form-section">
        <form onSubmit={addEvent}>
          <input
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Nome do evento ou atividade..."
          />
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="Palestra">Palestra</option>
            <option value="Workshop">Workshop</option>
            <option value="Painel">Painel</option>
          </select>
          <select value={eventVagas} onChange={(e) => setEventVagas(Number(e.target.value))}>
            <option value="10">10 vagas</option>
            <option value="30">30 vagas</option>
            <option value="50">50 vagas</option>
          </select>
          <button type="submit">Agendar</button>
        </form>
      </section>

      <section className="list-actions">
        <input 
          type="text" 
          placeholder='Buscar evento...' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={limparLista}>
          Limpar Cronograma
        </button>
      </section>
      <section className="limpar-lista">
        
      </section>

      <section className="filter-section">
        {["Todos", "Agendados", "Em Andamento", "Encerrados"].map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

      <main className="event-grid">
        {filteredEvents.map(item => (
          <div
            key={item.id}
            className={`event-card ${item.type.toLowerCase()}
            ${item.status.toLowerCase().replace(" ", "-")}`}
          >
            <div className="event-content">
              <h3 className={item.status === "Encerrado" ? "titulo-encerrado" : ""}>{item.title}</h3>
              <span className="event-tag">Tipo: {item.type}</span>
              <span className="status-badge">Status: {item.status}</span>
              <span className="vagas">Vagas disponíveis: {item.vagas}</span>
              <small>Registrado em: {item.date}</small>
            </div>
            <div className="event-actions">
              <button onClick={() => toggleStatus(item.id)} className="status-btn">
                {item.status === "Agendado" ? "Iniciar" : item.status === "Em Andamento"
                  ? "Encerrar" : "Reiniciar"}
              </button>
              <button onClick={() => inscreverAluno(item.id)} disabled={item.vagas === 0} className="inscrever-btn">
                {item.vagas === 0 ? "Esgotado" : "Inscrever Aluno"}
              </button>
              <button onClick={() => deleteEvent(item.id)} className="delete">
                Remover
              </button>
            </div>
          </div>
        ))}
      </main>

      <button
        className="floating-btn"
        onClick={() => setShowModal(true)}
      >
        <img src="\public\favicon_css.png" className="imagem-button"/>
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Alterações Visuais do Sistema</h2>

            <ul>
              <li>Cards com animação hover e sombras.</li>
              <li>Botões como animação hover.</li>
              <li>O título do evento fica riscado quando encerrado.</li>
            </ul>

            <button
              className="close-modal"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;