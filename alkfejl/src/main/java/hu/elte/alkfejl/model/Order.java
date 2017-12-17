package hu.elte.alkfejl.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.ui.Model;

import javax.persistence.*;

@Entity(name = "Order")
@Table(name = "ORDERS")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order implements ModelInterface {

    @Id
    @Column(name = "ORDER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter private Integer id;

    @JoinColumn
    @ManyToOne(targetEntity = User.class, optional = false)
    @JsonIgnoreProperties("orderList")
    @Getter @Setter private User owner;

    @Column(name = "PIZZA_ID", nullable = false)
    @Getter @Setter private Integer pizza_id;
}