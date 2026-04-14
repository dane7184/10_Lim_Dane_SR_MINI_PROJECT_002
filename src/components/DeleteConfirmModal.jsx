"use client";

export default function DeleteConfirmModal({ productName, onConfirm, onClose, loading }) {
    return (
        <div className="w-1/2 fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
            <div className="max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">Delete product?</h2>
                    <p className="text-sm text-gray-500">
                        Are you sure you want to delete <span className="font-medium text-gray-800">"{productName}"</span>? This action cannot be undone.
                    </p>
                </div>

                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50">
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-red-600 hover:bg-red-500 text-sm disabled:opacity-50 ">
                        {loading ? "Deleting..." : "Yes, delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}