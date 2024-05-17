using ETicaretAPI.Application.Repository;
using MediatR;

namespace ETicaretAPI.Application.Features.Queries.Product.GetAllProduct
{
    public class GetAllProductQueryHandler : IRequestHandler<GetAllProductQueryRequest, GetAllProductQueryResponse>
    {

        readonly IProductReadRepository _productReadRepository;

        public GetAllProductQueryHandler(IProductReadRepository productReadRepository)
        {
            _productReadRepository = productReadRepository;
        }

        public Task<GetAllProductQueryResponse> Handle(GetAllProductQueryRequest request, CancellationToken cancellationToken)
        {
            var totalCount = _productReadRepository.GetAll(false).Count();
            var products = _productReadRepository.GetAll(false).Skip(request.Page * request.Total).Take(request.Total).Select(p => new
            {
                p.Id,
                p.Name,
                p.Orders,
                p.Stock,
                p.Price,
                p.CreatedTime,
                p.UpdatedTime
            }).ToList();


            var response = new GetAllProductQueryResponse
            {
                TotalCount = totalCount,
                Products = products
            };

            return Task.FromResult(response);
        }
    }
}
