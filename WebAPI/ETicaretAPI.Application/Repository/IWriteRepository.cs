using ETicaretAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Repository
{
    public interface IWriteRepository<T>:IRepository<T> where T : BaseEntities
    {
        Task<bool> AddAsync(T model);
        bool Update(T model);
        Task<bool> AddRangeAsync(List<T> model);
        
        bool Remove(T model);
        Task<bool> RemoveAsync(string id);

        Task<int> SaveAsync();



    }
}
