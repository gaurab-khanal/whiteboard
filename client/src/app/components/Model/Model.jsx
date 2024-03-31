import React from 'react';

const Model = ({ children, show, setShowModel }) => {
    return (
        show ? (
            <>
                <div className='fixed inset-0 z-20 overflow-y-auto'>
                    <div
                        className='fixed inset-0 w-full h-full bg-BLACK bg-opacity-50 '
                        onClick={() => setShowModel(false)}
                    />
                    <div className='flex items-center justify-center min-h-screen bg-white z-30 px-4 py-8'>
                        <div className='relative w-full max-w-lg p-4 bg-WHITE rounded-md shadow-lg'>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        ) : null
    );
};

export default Model;
