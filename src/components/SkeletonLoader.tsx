import { Box, Skeleton } from '@mui/material';

type SkeletonLoaderProps = {
  type: 'card' | 'list' | 'detail' | 'table';
  count?: number;
};

const SkeletonLoader = ({ type, count = 1 }: SkeletonLoaderProps) => {

  if (type === 'card') {
    return (
      <div className="row">
        {Array(count).fill(0).map((_, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 p-4">
              <Skeleton variant="circular" width={60} height={60} sx={{ mx: 'auto', mb: 2 }} />
              <Skeleton variant="text" height={32} width="60%" sx={{ mx: 'auto', mb: 1 }} />
              <Skeleton variant="text" height={20} width="80%" sx={{ mx: 'auto' }} />
              <Skeleton variant="text" height={20} width="70%" sx={{ mx: 'auto' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

 
  if (type === 'list') {
    return (
      <div className="list-group">
        {Array(count).fill(0).map((_, index) => (
          <div className="list-group-item d-flex align-items-center" key={index}>
            <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
            <Box sx={{ width: '100%' }}>
              <Skeleton variant="text" height={24} width="40%" />
              <Skeleton variant="text" height={16} width="60%" />
            </Box>
          </div>
        ))}
      </div>
    );
  }

  
  if (type === 'detail') {
    return (
      <div className="card p-4">
        <div className="d-flex mb-4">
          <Skeleton variant="circular" width={80} height={80} sx={{ mr: 3 }} />
          <Box sx={{ width: '100%' }}>
            <Skeleton variant="text" height={32} width="40%" sx={{ mb: 1 }} />
            <Skeleton variant="text" height={20} width="60%" />
          </Box>
        </div>
        <Skeleton variant="rectangular" height={120} sx={{ mb: 3 }} />
        <Skeleton variant="text" height={20} width="90%" sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} width="95%" sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} width="85%" sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} width="80%" />
      </div>
    );
  }

 
  if (type === 'table') {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {Array(4).fill(0).map((_, index) => (
                <th key={index}>
                  <Skeleton variant="text" height={24} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(count).fill(0).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array(4).fill(0).map((_, colIndex) => (
                  <td key={colIndex}>
                    <Skeleton variant="text" height={20} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
