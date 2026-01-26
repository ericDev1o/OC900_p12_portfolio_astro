import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import HeadFootLogos from '../containers/HeadFootLogos';
import LinkClickWarning from './LinkClickWarning';

export default function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = modalIsOpen ? 'hidden' : '';
        return () => {document.body.style.overflow = '';}
        }, [modalIsOpen]);

    return <footer 
        className='
            px-4 
            pb-15
            flex
            justify-between'
    >
        <HeadFootLogos />
        <p className='mx-4'>
            &copy; 2026 Mon Portfolio. Tous droits réservés.  
            Code source disponible sous licence ISC sur GitHub.
        </p>
        <button 
            className='
                cursor-pointer 
                font-medium 
                text-fg-brand  
                text-blue-300
                hover:text-blue-600
                hover:underline
                duration-600 
                motion-reduce:duration-3000 
                ease-in-out 
                hover:scale-110'
            onClick={() => setModalIsOpen(true)}>mentions légales
        </button>
        <LinkClickWarning />
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel='mentions légales'
            overlayClassName='
                fixed 
                inset-0 
                bg-black 
                bg-opacity-40 
                backdrop-blur-sm 
                flex 
                justify-center 
                items-center'
            className='
                p-10 
                max-w-4/5
                m-auto
                inset-10
                max-h-[80vh] 
                overflow-y-auto 
                bg-gray-200
                text-center'
        >
            <h4
                className='
                    pt-8 
                    text-2xl
                    leading-loose'
            >
                mentions légales
            </h4>
            <h5
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
                utilisation et protection de vos données personnelles
            </h5>
            Selon https://www.cnil.fr/fr/la-cnil-publie-un-nouveau-guide-pour-accompagner-les-associations nous avons compris « que faire en cas de violation des données ».
            
            Si « Des données personnelles ont été, de manière accidentelle ou illicite, détruites, perdues, modifiées, divulguées (courriels transmis à des mauvais destinataires, équipement perdu ou volé, publication involontaire de données sur Internet, etc.)
            
            Cet incident constitue une « violation de données ».
            
            Lorsqu’un tel incident se produit, il est nécessaire de le documenter ». 
            
            « En cas de contrôle, ce document est vérifié par les services de la CNIL.
            <h6
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
            finalité
            </h6>
            Vos données sont collectées pour écrire par courriel votre message.
            <h6
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
                durée de conservation
            </h6>
            Vos données sont conservées 6 mois.
            <h6
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
            vos droits
            </h6>
            Vous avez le droit d'accès, rectification, effacement de vos données.

            Demandez-le selon https://framasoft.org/fr/cgu en remplissant https://contact.framasoft.org/.
            
            C'est dans le cadre de l'art. 34 de la loi "Informatique et Libertés".
            Vous ne devriez pas avoir besoin de contacter la CNIL après.
            <h6
                className='
                    pt-4
                    leading-loose'
            >
            Demande d’effacement et droit à l’oubli RGPD art.17
            </h6>
            En tant que répondant·e utilisat·rice·eur du service la suppression des données personnelles vous concernant ne prend pas en compte les données stockées que toute autorité administrative ou judiciaire pourrait avoir demandé avant que vous ayez demandé leur suppression.
            <h6
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
            notre charte
            </h6>
            Exprimez-vous s'il-vous-plaît selon https://framasoft.org/fr/moderation dans le formulaire mis à votre disposition.
            <h6
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
            transfert de vos données
            </h6>
            Vos données sont transférées à Framaforms(Framasoft, Paris).
            
            Voyez https://framasoft.frama.io/rgpd/services/framaforms/.
                
            Framasoft pourrait envoyer des données hors-UE via Akismet. 
            
            Voyez https://automattic.com/privacy/ §Other Things You Should Know (Keep Reading!) §Transferring Information
            
            Cette information pourrait relever de la liberté d'expression et d'opinion telle qu'exprimée https://framasoft.org/fr/cgu §"Version courte", "On est sympathiques" ... "Mais" ... "Clause "La loi est la loi, et on ne veut pas finir en taule": vous devez respecter la loi (que celle-ci soit bien faite ou idiote), sinon votre compte sera supprimé ;"
            
            Sentez-vous libre d'aller chercher dans une version plus longue comment on préfèrerait Akismet à Antispam Bee par exemple.
            
            J'aurais utilisé Framaforms sans compte utilisateur par simplicité de 2 sources web et IA concordantes: Brave Leo et Companion(OpenClassrooms) ChatGPT3.5+.
            
            Vous en tant que répondant·e ne devriez pas être concerné·e·s par un transfert de données hors de France.
            <h6
                className='
                    pt-6
                    text-[1.25rem]
                    leading-loose'
            >
            cookies et traçage
            </h6>
            Ce site https://ericdev1o.github.io/OC900_p12_portfolio/ n'utilise aucun cookie de suivi ni outil de traçage.

            Aucune donnée de navigation n'est collectée sauf les informations que vous renseignez volontairement dans le formulaire.
        </Modal>
    </footer>
}