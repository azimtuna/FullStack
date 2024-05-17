using ETicaretAPI.Application.Features.Commands.Product.CreateProduct;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Validations.Products
{
    public class CreateProductValidator : AbstractValidator<CreateProductCommandRequest>
    {

        public CreateProductValidator() {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull().WithMessage("lütfen ürün adını boş geçmeyin")
                .MaximumLength(150)
                .MinimumLength(4).WithMessage("ürün adını 4 ile 150 karakter arası olmalı");


            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull().WithMessage("Stock boş olamaz")
                .Must(s => s >= 0).WithMessage("stock bilgisi 0 dan küçük olamaz");


            RuleFor(p => p.Price)
                .NotEmpty()
                .NotNull().WithMessage("Stock boş olamaz")
                .Must(s => s >= 0).WithMessage("stock bilgisi 0 dan küçük olamaz");

        }

    }
}
