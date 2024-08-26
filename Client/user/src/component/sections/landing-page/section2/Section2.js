import React from 'react';
import styles from './section2.module.css';

function Section2() {
  return (
    <div className={styles.section2}>
      <h2>Clients and Partners</h2>
      <div className={styles.clients_partners}>
        <img src="/assest/images/partners/aetna_logo.png" alt="Aetna Logo" />
        <img src="/assest/images/partners/hms_logo.png" alt="Harvard Medical School" />
        <img src="/assest/images/partners/loreal1_logo.png" alt="L'Oréal" />
        <img src="/assest/images/partners/mindline_logo.png" alt="Mindline.sg" />
        <img src="/assest/images/partners/nhs_logo.png" alt="NHS" />
        <img src="/assest/images/partners/sr_logopng.png" alt="Partner Logo" />
        <img src="/assest/images/partners/bosch_logo.png" alt="bosch_logo" />
        <img src="/assest/images/partners/calmhsa_logo.jpeg" alt="calmhsa_logo" />
        <img src="/assest/images/partners/colgate_palmolive_logo.png" alt="colgate_palmolive_logo" />
        <img src="/assest/images/partners/columbia_uni_logo.png" alt="columbia_uni_logo" />
      </div>
    </div>
  );
}

export default Section2;
