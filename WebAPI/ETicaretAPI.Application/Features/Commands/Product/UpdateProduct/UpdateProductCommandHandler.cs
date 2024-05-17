using ETicaretAPI.Application.Repository;
using MediatR;
using p=ETicaretAPI.Domain.Entities;
namespace ETicaretAPI.Application.Features.Commands.Product.UpdateProduct
{
    public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommandRequest, UpdateProductCommandResponse>
    {
        readonly IProductWriteRepository _productWriteRepository;
        readonly IProductReadRepository _productReadRepository;
        public UpdateProductCommandHandler(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        public async Task<UpdateProductCommandResponse> Handle(UpdateProductCommandRequest request, CancellationToken cancellationToken)
        {
            p.Product product = await _productReadRepository.GetByIdAsync(request.Id);

            product.Stock = request.Stock;
            product.Price = request.Price;
            product.Name = request.Name;

            await _productWriteRepository.SaveAsync();
            return new();

        }
    }
}
