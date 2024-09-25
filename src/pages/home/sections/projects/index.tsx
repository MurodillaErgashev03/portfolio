import { ModalPhotoSvg } from 'src/assets/svg';
import './projects.scss';
import { docum } from './useProjects';
import { Modal } from 'antd';
import { useState } from 'react';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const showModal = (project) => { 
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-cards">
          {docum.map((item, i) => (
            <div
              key={i}
              className="projects-card"
              onClick={() => showModal(item)}
            >
              <div className="projects-card-img">
                <img src={item.logo} alt={`${item.logo} img`} />
              </div>
              <h3>{item.name}</h3>
              <h5>{item.category}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        {selectedProject && (
          <Modal
            // title={selectedProject.name}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="modal-content">
              <h3>{selectedProject.name}</h3>
              <div>
                <ModalPhotoSvg />
                <p>Preview:</p>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.link}
                </a>
              </div>
              <p>{selectedProject.desc}</p>
              <img
                src={selectedProject?.img}
                alt={selectedProject?.name}
                className="modal-img"
              />
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}

export default Projects;
