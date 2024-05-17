using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Features.Queries.Product.GetyById
{
    public class GetByIdQueryRequest:IRequest<GetByIdQueryResponse>
    {
        public string id { get; set; }

    }
}
