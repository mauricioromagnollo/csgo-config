import './styles.css'

interface DownloadButtonProps {
  pathToFile: string
  fileName: string
}

export function DownloadButton(props: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = props.pathToFile
    link.setAttribute("download", "")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return <button className='button' onClick={handleDownload}>Download {props.fileName}</button>;
}

