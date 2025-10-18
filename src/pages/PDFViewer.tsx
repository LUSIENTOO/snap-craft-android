import { useNavigate, useSearchParams } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";

const PDFViewer = () => {
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get("url");
  const title = searchParams.get("title") || "PDF Viewer";

  return (
    <MobileLayout title={title} showBack={true} showMenu={false}>
      <div className="w-full h-[calc(100vh-120px)]">
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title={title}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No PDF selected
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default PDFViewer;
