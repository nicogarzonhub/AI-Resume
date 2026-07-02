"use client";

import BlobCursor from "@/components/ui/BlobCursor";

export default function BlobCursorWrapper() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <BlobCursor
        blobType="circle"
        fillColor="#3b82f6"
        trailCount={3}
        sizes={[30, 50, 40]}
        innerSizes={[8, 14, 10]}
        innerColor="rgba(255,255,255,0.6)"
        opacities={[0.2, 0.3, 0.25]}
        shadowColor="rgba(59,130,246,0.3)"
        shadowBlur={6}
        shadowOffsetX={3}
        shadowOffsetY={8}
        filterStdDeviation={20}
        useFilter={true}
        fastDuration={0.15}
        slowDuration={0.6}
        zIndex={60}
      />
    </div>
  );
}
