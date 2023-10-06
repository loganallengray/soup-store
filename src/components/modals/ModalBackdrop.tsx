type Props = {
    setShowModal: (...args: any) => any
}

const ModalBackdrop = ({ setShowModal }: Props) => {
    return (
        <div id="modal-backdrop" onClick={() => setShowModal(false)}></div>
    )
}

export default ModalBackdrop;